import React from 'react'
import styled from 'styled-components'

export default function Verified({ result }) {
	const { verified, name, signatureData } = result

	return (
		<Wrapper>
			{verified ? (
				<>
					<DataItem>
						<DataItemLabel>{name}</DataItemLabel>
						<DataItemContent>Verified! 🎉</DataItemContent>
					</DataItem>
					<DataItem>
						<DataItemLabel>Signature</DataItemLabel>
						<SignatureData>{signatureData.signature}</SignatureData>
					</DataItem>
					<DataItem>
						<DataItemLabel>Domain</DataItemLabel>
						<DataItemContent>{signatureData && signatureData.domain}</DataItemContent>
					</DataItem>
					<DataItem>
						<DataItemLabel>Expires</DataItemLabel>
						<DataItemContent>
							{signatureData &&
								new Date(Number(signatureData.expires * 1000)).toLocaleString('en-US', {
									weekday: 'long',
									day: 'numeric',
									month: '2-digit',
									year: 'numeric'
								})}
						</DataItemContent>
					</DataItem>
				</>
			) : (
        <DataItem>
          <DataItemLabel>{name}</DataItemLabel>
          <DataItemContent>Not verified 😔</DataItemContent>
        </DataItem>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  padding-top: 2rem;
	gap: 1.25rem;
`

const DataItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: .75rem;
	color: #fff;
`

const DataItemLabel = styled.span`
	padding: 0.4rem .75rem;
	font-size: .75rem;
	color: #242424;
	width: fit-content;
	border-radius: 0.25rem;
  pointer-events: none;
	font-weight: 400;

	// Glass effect
	background: rgba(255, 255, 255, 0.42);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`

const DataItemContent = styled.p`
  font-size: 1rem;
`

const SignatureData = styled(DataItemContent)`
	font-family: monospace;
	word-break: break-all;
`
