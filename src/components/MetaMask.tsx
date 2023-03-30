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
				style={{ color: '#387fc7', textDecoration: 'none' }}>
				INSTALL METAMASK
			</a>
		)
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			{account ? <div style={{ paddingRight: '1vh' }}>{`[${account}]`}</div> : null}

			<div>{network}</div>
		</div>
	)
}

const Metamask = observer(() => {
	return (
		<Wrapper>
			<Image src="/static/images/metamask.png" alt="Metamask Logo" className="img" />
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
  padding: .5rem;
  margin-bottom: 1.2rem;
  border-radius: 12px;
  color: #303030;

  // Glass effect
  background: rgba(255, 255, 255, 0.42);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`

const Image = styled.img`
  width: 3rem;
  height: 3rem;
`