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
        list-style-type: disc !important;
        list-style-position: outside !important;
        padding-left: 25px !important;
        margin-left: 0 !important;
      }

      li {
        display: list-item !important;
        margin-bottom: 8px;
        list-style-type: disc;
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }

  .about-image {
    text-align: center;
    img {
      margin-top: 2rem;
      width: 35%;
      filter: grayscale(0);
      transition: filter 0.5s;

      &:hover {
        filter: grayscale(0);
      }
    }
  }

  /* Media Queries */
  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }

    .about-image {
      display: flex;
      max-width: 100%;
      
      img {
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;

      img {
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;

        &:hover {
          filter: grayscale(0);
        }
      }
    }

    .projects {
      grid-template-columns: 1fr;
    }
  }
`;