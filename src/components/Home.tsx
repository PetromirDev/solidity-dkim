import { useState, useCallback } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import Dropzone from 'react-dropzone'
import Metamask from './MetaMask'
import eth from '../stores/eth'
import { InsertDriveFileOutlined, AttachFile } from '@mui/icons-material'
import parseEmail from '../parse-email/browser'
import toSolidity from '../parse-email/utils/toSolidity'
import GlobalStyle from '../styles'
import dynamic from 'next/dynamic'
import Verified from './Verified'
import Instructions from './Instructions'
import Head from 'next/head'

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
	const disabled = !eth.isInstalled || !(eth.network === 'sepolia' || eth.network === 'unknown network') && !email?.name

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
		reader.onload = () => setEmail({
			name: file.name,
			content: reader.result
		})
		reader.readAsText(file)
	}, [])

	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" /> 
			</Head>
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
								{email?.name ? (
									<FileStatus>
										<InsertDriveFileOutlined /> 
										<p>{email.name} loaded</p>
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

					<VerifyButton onClick={() => verify(email.content).then(setVerified).catch(setError)} disabled={disabled}>
						Verify
					</VerifyButton>
					{error ? (
						<p className="error">error: {error}</p>
					) : verified.length > 0 ? (
						verified.map((result) =>
							<Verified key={result.name} result={result} />
						)
					) : (
						''
					)}
				</Body>
				<Instructions />
			</Container>
		</>
	)
})

export default dynamic(() => Promise.resolve(Home), {
  ssr: false
})

const Container = styled.div`
	padding: 2.5rem;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 4rem;

	background: hsla(10, 89%, 70%, 1);
	background: linear-gradient(45deg, hsla(10, 89%, 70%, 1) 0%, hsla(350, 100%, 69%, 1) 100%);
	background: -moz-linear-gradient(45deg, hsla(10, 89%, 70%, 1) 0%, hsla(350, 100%, 69%, 1) 100%);
	background: -webkit-linear-gradient(45deg, hsla(10, 89%, 70%, 1) 0%, hsla(350, 100%, 69%, 1) 100%);
	filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F78770", endColorstr="#FF607B", GradientType=1 );
`

const Body = styled.div`
	max-width: 80rem;
	padding: 2.5rem;
	width: 100%;
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
	margin-bottom: 2rem;
	min-height: 12.5rem;
	cursor: pointer;

	// Glass effect
	background: rgba(255, 255, 255, 0.53);
	border-radius: 12px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.3);

	// Shake animation
	@keyframes shake {
  0% {
    margin-left: 0rem;
  }
  25% {
    margin-left: 0.5rem;
  }
  75% {
    margin-left: -0.5rem;
  }
  100% {
    margin-left: 0rem;
  }
}

	${(props) => props.error && `animation: shake 0.2s ease-in-out 0s 2;`}

`

const FileStatus = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	svg {
		color: #303030;
		width: 3rem;
		height: 3rem;
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
