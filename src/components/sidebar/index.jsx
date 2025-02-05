import { Container, Header, NewDishButton } from "./styles";
import { Input } from "../input";
import { FiSearch } from "react-icons/fi";
import { USER_ROLE } from "../../utils";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SideBar({ menuIsOpen, onCloseMenu, onSearch }) {
  const [search, setSearchInput] = useState("")

  const {user} = useAuth()

  const handleSearchChange = (ev) => {
    const newValue = ev.target.value
    
    setSearchInput(newValue)
    onSearch(newValue) 
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>

      <Header>

        <div className="logo-wrapper">

          <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C" />
          </svg>
          <h1>FoodExplorer</h1>

        </div>

        {

          menuIsOpen && USER_ROLE.ADMIN.includes(user.role) && 
          (
            <NewDishButton to="/newdish">Novo prato</NewDishButton>
          )

        }

        {

          menuIsOpen && 
          (
            <div className="input-wrapper">
              <Input
                placeholder="Busque por pratos ou ingredientes"
                type="text"
                icon={FiSearch}
                value={search}
                onChange={handleSearchChange}
              />
            </div>
          )

        }

      </Header>
      
    </Container>
  );
}
