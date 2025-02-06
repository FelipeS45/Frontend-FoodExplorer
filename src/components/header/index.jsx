import { Container, ProfileView } from "./styles";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { FiMenu } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { USER_ROLE } from "../../utils/utils";

import { api } from "../../services/api";

export function Header({ onMenuToggle }) { 
  const { user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>

      <button onClick={onMenuToggle}>
        <FiMenu />
      </button>

      <div className="logo-wrapper">

        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C" />
        </svg>

        <div className="logo">

          <h1>FoodExplorer</h1>

          {
            USER_ROLE.ADMIN.includes(user.role) &&

            <p className = "admin-user">admin</p>
          }

        </div>

      </div>

      <div className="profile-wrapper">

        <ProfileView to="/profile">
          <img src={avatarUrl} alt="Foto do usuário" />
        </ProfileView>

      </div>
    </Container>
  );
}
