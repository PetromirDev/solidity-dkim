import React from 'react'
import styled from 'styled-components'

export default function Instructions() {
  return (
    <Wrapper>
      <Title>How to use this tool</Title>
      <Step>
        <StepNumber>1.</StepNumber>
        {" "}
        <StepText>
          Connect your Browser wallet to the Sepolia network.
        </StepText>
      </Step>
      <Step>
        <StepNumber>2.</StepNumber>
        {" "}
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
  gap: 1rem;

  max-width: 80rem;
	width: 100%;
    
  text-align: center;
	margin: 0 auto;
`

const Title = styled.h2`
  margin-bottom: 1rem;
  
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`

const Step = styled.p`
  font-size: 1rem;
  line-height: 1.625rem;
`

const StepNumber = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.625rem;
`

const StepText = styled.span`
  line-height: 1.625rem;
`