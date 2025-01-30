import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 100px 250px;

  >header{
    width: 100%;
    height: 144px;

    background: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0px 124px;

    svg{
      color: ${({theme}) => theme.COLORS.GRAY_100};
      font-size: 24px;      
    }

    button{
      background: none;
      border: none;
    }
  }
`

export const Content = styled.div`
  margin: auto;

  background: ${({theme}) => theme.COLORS.DARK_700};

  border: none;
  border-radius: 5px;

  padding: 64px 24px;
`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  >div:nth-child(2){
    margin-top: 72px;
  }

  .buttons-wrapper {
    margin-top: 24px;

    display: flex;
    flex-direction: column;
    gap: 94px;
  }

  .inputs-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 32px;

  width: 186px;
  height: 186px;

  >img{
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  >label{
    width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: ${({theme}) => theme.COLORS.ORANGE};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: -32px;
    right: 7px;

    cursor: pointer;

    >input{
      display: none;
    }

    svg{
      width: 32px;
      height: 32px;

      color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    }
  }
` 