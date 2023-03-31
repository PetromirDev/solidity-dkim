import React from 'react'
import styled from 'styled-components'

export default function Instructions() {
  return (
    <Wrapper>
      <Title>How to use this tool</Title>
      <Step>
        <StepNumber>1</StepNumber>
        <StepText>
          Connect your Browser wallet to the Sepolia network.
        </StepText>
      </Step>
      <Step>
        <StepNumber>2</StepNumber>
        <StepText>
          Drag and drop an email file to the dropzone or select one from the buttons below the dropzone.
        </StepText>
      </Step>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 80rem;
  padding-bottom: 2rem;
	width: 100%;
  text-align: center;
	margin: 0 auto;
  color: #fff;
`

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2rem;
`

const Step = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  gap: .75rem;
`

const StepNumber = styled.span`
  font-size: 2rem;
  font-weight: 800;
`

const StepText = styled.p`
  font-size: 1.2rem;
`