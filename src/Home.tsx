import { useState, useCallback } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import Dropzone from 'react-dropzone'
import Metamask from './components/MetaMask'
import eth from './stores/eth'
import { InsertDriveFileOutlined, AttachFile } from '@material-ui/icons'
import parseEmail from '../parse-email/browser'
import toSolidity from '../parse-email/utils/toSolidity'
import GlobalStyle from './styles'

const verify = (email: string): Promise<any> => {
	return new Promise(async (resolve, reject) => {
		const DKIM = await eth.getContract('DKIM').catch(reject)

		const dkims = await parseEmail(email)

		const dkimsInBytes = dkims.map((dkim) => {
			return toSolidity({
				algorithm: dkim.algorithm,
				hash: dkim.hash,
				signature: dkim.signature.signature,
				exponent: dkim.exponent,
				modulus: dkim.modulus,
				signatureData: dkim.signature
			})
		})

		const result = Promise.all(
			dkimsInBytes.map((dkim, i) => {
				return DKIM.verify(dkim.algorithm, dkim.hash, dkim.signature, dkim.exponent, dkim.modulus).then((res) => ({
					name: dkims[i].entry.name,
					verified: res['0'],
					signatureData: dkim.signatureData
				}))
			})
		).catch(reject)

		return resolve(result)
	})
}

const Home = observer(() => {
	const [email, setEmail] = useState(null)
	const [error, setError] = useState(null)
	const [verified, setVerified] = useState([])
	const [dragging, setDrag] = useState(false)
	const disabled = !eth.isInstalled || !(eth.network === 'sepolia' || eth.network === 'unknown network')

	const onDrop = useCallback((files) => {
		setEmail(null)
		setError(null)
		setVerified([])

		if (files.length < 1) {
			return setError('no file included')
		}
		const file = files[0]

		const reader = new FileReader()

		reader.onabort = () => setError('file reading was aborted')
		reader.onerror = () => setError('file reading has failed')
		reader.onload = () => setEmail(reader.result)

		reader.readAsText(file)
	}, [])

	return (
		<>
			<GlobalStyle />
			<Container>
				<Body>
					<Title>solidity-dkim demo</Title>

					<Metamask />
					<Dropzone
						onDrop={onDrop}
						multiple={false}
						onDragEnter={() => setDrag(true)}
						onDragLeave={() => setDrag(false)}>
						{({ getRootProps, getInputProps }) => (
							<DragNDrop {...getRootProps()}>
								<input {...getInputProps()} />
								{email ? (
									<FileStatus>
										<InsertDriveFileOutlined /> FILE LOADED
									</FileStatus>
								) : (
									<FileStatus>
										<AttachFile />
										<p>Drag 'n' drop some files here, or click to select files</p>
									</FileStatus>
								)}
							</DragNDrop>
						)}
					</Dropzone>

					<VerifyButton onClick={() => verify(email).then(setVerified).catch(setError)} disabled={disabled}>
						Verify
					</VerifyButton>
					{error ? (
						<p className="error">error: {error}</p>
					) : verified.length > 0 ? (
						verified.map((result) =>
							result.verified ? (
								<div className="verified__wrapper">
									<h1 key={result.name} className="verified">
										{result.name}: verified! 🎉
									</h1>
									<p className="verified__signature">
										<b>Signature:</b> {result.signatureData.signature}
									</p>
									<p>
										<b>Domain:</b> {result.signatureData && result.signatureData.domain}
									</p>
									<p>
										<b>Expires:</b>{' '}
										{result.signatureData &&
											new Date(Number(result.signatureData.expires + 1000)).toLocaleString('en-US', {
												weekday: 'long',
												day: 'numeric',
												month: '2-digit',
												year: 'numeric'
											})}
									</p>
								</div>
							) : (
								<h1 key={result.name} className="not-verified">
									{result.name}: not verified 😔
								</h1>
							)
						)
					) : (
						''
					)}
				</Body>
			</Container>
		</>
	)
})

export default Home

const Container = styled.div`
	padding: 2.5rem;
	width: 100%;
	min-height: 100vh;
	background: hsla(331, 78%, 69%, 1);
	background: linear-gradient(90deg, hsla(331, 78%, 69%, 1) 0%, hsla(238, 82%, 70%, 1) 100%);
	background: -moz-linear-gradient(90deg, hsla(331, 78%, 69%, 1) 0%, hsla(238, 82%, 70%, 1) 100%);
	background: -webkit-linear-gradient(90deg, hsla(331, 78%, 69%, 1) 0%, hsla(238, 82%, 70%, 1) 100%);
	filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ED71AD", endColorstr="#7277F1", GradientType=1 );
`

const Body = styled.div`
	max-width: 80rem;
	padding: 2.5rem;
	margin: 0 auto;

	// Glass effect
	background: rgba(255, 255, 255, 0.2);
	border-radius: 12px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.3);
`

const DragNDrop = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  margin-bottom: 4rem;
  min-height: 300px;
  cursor: pointer;

	// Glass effect
	background: rgba(255, 255, 255, 0.53);
	border-radius: 12px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.3);
`

const FileStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
  svg {
    color: #303030;
    width: 3.125rem;
    height: 3.125rem;
  }

  p {
    color: #303030;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 2.2rem;
`

const VerifyButton = styled.button`
  width: 100%;
  padding: 1.25rem;
  border-radius: 12px;
  border: none;
  background-color: #fff;
  color: #303030;
  font-size: 1rem;
  font-weight: 600;
`