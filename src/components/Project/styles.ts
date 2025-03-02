import styled from "styled-components";

export const Container = styled.main`
  margin-top: 15rem;
  
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 5.0rem;
        }
      }
      
      h3 {
        margin-bottom: 2rem;
        color: var(--green);
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;

        a {
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }

      ul {
        padding-left: 0;
        margin-left: 0;
      }

      li {
        margin-bottom: 8px;
        list-style: none; /* Removes bullet points */
      }

      footer {
        margin-top: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
        border-top: 1px solid #444;

        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          flex-wrap: wrap;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
          align-items: center;

          a {
            color: var(--green);
            font-size: 1.6rem;
            transition: color 0.25s;

            &:hover {
              color: var(--pink);
            }
          }
        }
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }

    footer {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
      
      .tech-list {
        justify-content: center;
      }

      .footer-links {
        justify-content: center;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .projects {
      grid-template-columns: 1fr;
    }

    footer {
      flex-direction: column;
      gap: 1rem;
      text-align: center;

      .tech-list {
        flex-direction: column;
        align-items: center;
      }

      .footer-links {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;