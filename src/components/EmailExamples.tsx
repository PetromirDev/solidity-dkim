import React, { useCallback } from 'react'
import styled from 'styled-components'

import { Gmail, ICloud, Ambire, Yahoo } from './emailExamplesList.js'

const files = [
  {
    name: 'gmail.eml',
    content: Gmail,
  },
  {
    name: 'icloud.eml',
    content: ICloud
  },
  {
    name: 'ambire.eml',
    content: Ambire
  },
  {
    name: 'yahoo.eml',
    content: Yahoo
  }
]

export default function EmailExamples({ setEmail, setError }) {
  const loadFile = useCallback((file, setEmail, setError) => {
    setEmail({
      name: file.name,
      content: file.content
    })
    setError(null)

  }, [setEmail])

  return (
    <Wrapper>
      <TitleWrapper>
        <Subtitle>Don't want to upload an email?</Subtitle>
        <Title>Try one of our examples.</Title>
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
  flex: 1;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  /* padding-bottom: 2.5rem; */
  grid-template-areas: 
    'title'
    'title'
    'buttons'
    'buttons'
    'buttons';
  ;
`

const Subtitle = styled.h4`
  text-align: center;
  font-size: 1rem;
  margin-bottom: .9375rem;
  opacity: 1;
`
const TitleWrapper = styled.div`
  grid-area: title;
  padding-top: 1rem;
`
const Title = styled.h3`
  text-align: center;
  opacity: .9;
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
  color: #c9cbcd;
  background-color: #1c1e1f;
	border: 1px solid #303234;
	border-radius: .75rem;
`
