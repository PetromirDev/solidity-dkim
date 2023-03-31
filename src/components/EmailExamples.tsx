import React, { useCallback } from 'react'
import styled from 'styled-components'
import GmailEML from '../../test/emails/gmail.eml'
import ICloud from '../../test/emails/icloud.eml'
import Outlook from '../../test/emails/outlook.eml'
import ProtonMail from '../../test/emails/protonmail.eml'
import Yahoo from '../../test/emails/yahoo.eml'

const files = [
  {
    name: 'gmail.eml',
    content: GmailEML
  },
  {
    name: 'icloud.eml',
    content: ICloud
  },
  {
    name: 'outlook.eml',
    content: Outlook
  },
  {
    name: 'protonmail.eml',
    content: ProtonMail
  },
  {
    name: 'yahoo.eml',
    content: Yahoo
  }
]

export default function EmailExamples({ setEmail, setError }) {
  const loadFile = useCallback((file, setEmail) => {
    setEmail({
      name: file.name,
      content: file.content
    })
  }, [setEmail])

  return (
    <Wrapper>
      <TitleWrapper>
      <Title>Example emails</Title>
      </TitleWrapper>
      <Buttons>

        {
          files.map((file) => (
            <EmailButton key={file.name} onClick={() => loadFile(file, setEmail, setError)}>{file.name}</EmailButton>
          ))
        }
      </Buttons>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas: 
    'title'
    'buttons'
    'buttons'
    'buttons';
  ;
`

const TitleWrapper = styled.div`
  grid-area: title;
  padding-top: 1rem;
`
const Title = styled.h3`
  text-align: center;
  color: #fff;
`

const Buttons = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
  grid-area: buttons;
`

const EmailButton = styled.button`
  padding: 1rem;
  border-radius: .75rem;
  border: none;
  cursor: pointer;

  // Glass effect
  background: rgba(255, 255, 255, 0.42);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`
