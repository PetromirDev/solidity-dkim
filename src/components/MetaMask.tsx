import { observer } from 'mobx-react'
import styled from 'styled-components'
import ethStore from '../stores/eth'

const Text = ({ isInstalled, account, network }: typeof ethStore) => {
	if (!isInstalled) {
		return (
			<a
				href="https://metamask.io/"
				target="_blank"
				rel="noopener noreferrer"
				style={{ color: '#ff5b3a', fontWeight: 500, textDecoration: 'none' }}>
				Install MetaMask
			</a>
		)
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
			{account ? <p>{`[${account}]`}</p> : <p>You haven't connected your MetaMask account.</p>}

			<p>{network}</p>
		</div>
	)
}

const Metamask = observer(() => {
	return (
		<Wrapper>
			{ethStore.isInstalled && <Image src="/static/images/metamask.png" alt="Metamask Logo" className="img" />}
			<Text
        {...ethStore}
			/>
		</Wrapper>
	)
})

export default Metamask

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
	height: 3.75rem;
	margin-bottom: 1rem;
  border-radius: 12px;
  color: #fff;

	background-color: #1c1e1f;
	border: 1px solid #303234;
`

const Image = styled.img`
  width: 3rem;
  height: 3rem;
`