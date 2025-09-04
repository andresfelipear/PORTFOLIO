import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 60px 70px;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 40px 40px;
  }

  @media (max-width: 425px) {
    padding: 40px 25px;
  }
`

export const Subtitle = styled.div`
  font-size: 1.1rem;
  color: #999;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
`

export const TypingContainer = styled.div`
  font-size: 6.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.2;

  @media (max-width: 1200px) {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 3.8rem;
  }

  @media (max-width: 425px) {
    font-size: 2.8rem;
  }
`

export const TypingLine = styled.div`
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  border-right: 0.1em solid var(--maincolor, #007acc);
  animation: typing-full 4s ease-out 0.5s forwards,
    blink-caret 1s linear 5s infinite;

  @keyframes typing-full {
    0% {
      width: 0;
    }
    100% {
      width: 15.1ch;
    } /* "Hello I am Andres" */
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: var(--maincolor, #007acc);
    }
    50% {
      border-color: transparent;
    }
  }

  .hello {
    color: #4a4a4a;
  }

  .iam {
    color: #4a4a4a;
  }

  .name {
    color: var(--maincolor, #007acc);
  }

  @media (max-width: 768px) {
    @keyframes typing-full {
      0% {
        width: 0;
      }
      100% {
        width: 20ch;
      }
    }
  }

  @media (max-width: 425px) {
    @keyframes typing-full {
      0% {
        width: 0;
      }
      100% {
        width: 22ch;
      }
    }
  }
`

export const Description = styled.div`
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 425px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`

export const Button = styled.button`
  padding: 15px 35px;
  background: ${(props) =>
    props.primary ? 'var(--maincolor, #007acc)' : '#666'};
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    background: ${(props) =>
      props.primary ? 'var(--maincolor-dark, #005a9a)' : '#555'};
  }

  @media (max-width: 425px) {
    padding: 12px 25px;
    font-size: 0.9rem;
  }
`

export const Skills = styled.div`
  font-size: 1rem;
  color: #bbb;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
    line-height: 1.6;
  }
`
