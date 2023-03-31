import { useState, useCallback } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import Dropzone from 'react-dropzone'
import dynamic from 'next/dynamic'
// Icons
import { InsertDriveFileOutlined, AttachFile } from '@mui/icons-material'
// Helpers
import parseEmail from '../parse-email/browser'
import toSolidity from '../parse-email/utils/toSolidity'
// State
import eth from '../stores/eth'
// Components
import Metamask from './MetaMask'
import Verified from './Verified'
import Instructions from './Instructions'
import GlobalStyle from '../styles'
import EmailExamples from './EmailExamples'
import ErrorBoundary from './ErrorBoundary'

const verify = (email: string): Promise<any> => {
	return new Promise(async (resolve, reject) => {
		const DKIM = await eth.getContract('DKIM').catch(reject)

		const dkims = await parseEmail(email).catch(reject)
		if (!dkims || !dkims.length) return

		const dkimsInBytes = dkims && dkims.map((dkim) => {
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
	// Button logic
	const isInstalled = eth.isInstalled
	const isSepolia = eth.network === 'sepolia' || eth.network === 'unknown network'
	const hasEmail = email?.name
	const isDisabled = !isInstalled || !isSepolia || !hasEmail
	
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
		reader.onload = () =>
			setEmail({
				name: file.name,
				content: reader.result
			})
		reader.readAsText(file)
	}, [])

	const handleVerify = useCallback(async () => {
		if (email === null || !email?.content) {
			return
		}

		verify(email.content).then(setVerified).catch(setError)
	}, [email?.content])

	return (
		<ErrorBoundary>
			<GlobalStyle />
			<Container>
				<Instructions />
				<Body>
					<Title>solidity-dkim demo</Title>
					<Metamask />
					<SideToSide>
						<Dropzone
							onDrop={onDrop}
							disabled={!isInstalled || !isSepolia}
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
											<p>Drag 'n' drop .eml files here, or click to select files</p>
										</FileStatus>
									)}
								</DragNDrop>
							)}
						</Dropzone>
						<EmailExamples setEmail={setEmail} setError={setError} />
					</SideToSide>
					<VerifyButton onClick={handleVerify} disabled={isDisabled}>
						{!isDisabled ? 'Verify' : 'Please follow the instructions above'}
					</VerifyButton>
					{error ? (
						<Error className="error">Error: {error}</Error>
					) : verified.length > 0 ? (
						verified.map((result) => <Verified key={result.name} result={result} />)
					) : (
						''
					)}
				</Body>
			</Container>
		</ErrorBoundary>
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
	gap: 4rem;

	background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
 background-blend-mode: multiply;
 	
	/* background: hsla(10, 89%, 70%, 1);
	background: linear-gradient(45deg, hsla(10, 89%, 70%, 1) 0%, hsla(350, 100%, 69%, 1) 100%);
	background: -moz-linear-gradient(45deg, hsla(10, 89%, 70%, 1) 0%, hsla(350, 100%, 69%, 1) 100%);
	background: -webkit-linear-gradient(45deg, hsla(10, 89%, 70%, 1) 0%, hsla(350, 100%, 69%, 1) 100%);
	filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F78770", endColorstr="#FF607B", GradientType=1 ); */
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

const SideToSide = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
	min-height: 15.625rem;
`

const DragNDrop = styled.div`
	display: flex;
	flex: 2;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
	gap: 1rem;

	svg {
		color: #0f0f0f;
		width: 2rem;
		height: 2rem;
	}

	p {
		color: #0f0f0f;
		font-size: .875rem;
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
	background: #0f0f0f;
	color: #fff;
	font-size: 1rem;
	font-weight: 600;
	transition: all 0.2s ease-in-out;
	
	&:hover:not(:disabled) {
		cursor: pointer;
		opacity: 0.8;
	}

	&:disabled {
		opacity: 0.5;
	}
`
const Error = styled.p`
	color: red;
	text-align: center;
	margin: 10px 0;
	font-weight: bold;
`