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

		const dkimsInBytes =
			dkims &&
			dkims.map((dkim) => {
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
				<Title>solidity-dkim demo</Title>
				<Instructions />
				<Body>
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
					<VerifyButton onClick={handleVerify} disabled={isDisabled} withMargin={!error && verified.length > 0}>
						{!isDisabled ? 'Verify' : 'Please follow the instructions above'}
					</VerifyButton>
					{error ? <Error>Error: {error}</Error> : null}
					{!error && verified.length > 0 ? (
						<>
							<Separator />
							{verified.map((result) => (
								<Verified key={result.name} result={result} />
							))}
						</>
					) : null}
				</Body>
			</Container>
		</ErrorBoundary>
	)
})

export default dynamic(() => Promise.resolve(Home), {
	ssr: false
})

const Container = styled.div`
	padding: 2rem;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 4rem;
	background: linear-gradient(#1c1e1f 0%, #1c1e1f 100%);
`

const Body = styled.div`
	max-width: 80rem;
	padding: 2rem;
	width: 100%;
	margin: 0 auto;
	border-radius: 12px;
	background-color: #28272a;
	border: 1px solid #343638;
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

	background-color: #1c1e1f;
	border: 1px solid #303234;
	border-radius: 0.75rem;
`

const FileStatus = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	svg {
		width: 2rem;
		height: 2rem;
	}

	p {
		font-size: 0.875rem;
		max-width: 15.625rem;
		line-height: 1.4;
		text-align: center;
	}
`

const Title = styled.h1`
	font-size: 2rem;
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	margin-bottom: 3rem;
`

const VerifyButton = styled.button`
	width: 100%;
	padding: 1.25rem;
	border-radius: 12px;
	border: none;
	background: #0f0f0f;
	font-size: 1rem;
	font-weight: 600;
	transition: all 0.2s ease-in-out;
	
	background: linear-gradient(#141414, #141414) padding-box, linear-gradient(to right, #a036be, #22c4ed) border-box;
	border: 2px solid transparent;
	margin-bottom: ${props => props.withMargin ? '2rem' : '0'};
	&:hover:not(:disabled) {
		cursor: pointer;
		opacity: 0.8;
	}

	&:disabled {
		opacity: 0.5;
	}
`
const Error = styled.p`
	background-color: #fdedee;
	padding: 1rem;
`

const Separator = styled.div`
	width: 100%;
	height: 2px;
	background-color: #303234;
`
