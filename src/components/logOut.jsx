import { useState, useContext } from "react"
import axios from "axios"
import { UserContext } from "@/App"
import { Link } from "react-router-dom"

export default function LogOut() {
  return(
    <div>
      <div>
        <form>
          <h2>Logout</h2>
          <label htmlFor="">Are you sure?</label>
          <button>No</button>
          <button>Yes</button>
        </form>
      </div>
    </div>
  )
}