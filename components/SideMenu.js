import React from "react";
import Modal from "../components/Modal";
import { createMovie } from "../actions/index";
import MovieCreateForm from "../components/MovieCreateForm";
import { useRouter } from "next/router";
// Containment
const SideMenu = (props) => {
  const { categories } = props
  const router = useRouter()
  let modal = null

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      modal.closeModal()
      router.push('/')
    })
  }

  return (
    <div>
      <Modal ref={ele => modal = ele} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
        { categories.map(c =>
          <a
            onClick={() => props.changeCategory(c.name)}
            key={c.id}
            href="#"
            className={`list-group-item ${props.activeCategory === c.name ? 'active' : ''}`}>{c.name}</a>
          )
        }
      </div>
    </div>
  )
}

export default SideMenu