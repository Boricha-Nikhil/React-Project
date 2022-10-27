import React, { useEffect } from 'react'
import { getData } from "../../store/action/user"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'

const Home = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getData())
    }, [])

    const logOut = () => {
        dispatch({type: "CLEAR"})
        localStorage.clear();
        history.push('/')

    }

    const data = useSelector(state => state.user)

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <a class="navbar-brand">Demo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item dropdown" style={{cursor:"pointer"}} onClick={() => logOut()}>
                            LogOut
                        </li>
                    </ul>
                </div>
            </nav>
            <table className="table table-striped table-bordered mt-3">
            {
                data.isLoading && 
                <div>
                    <h1>Loading...</h1>
                </div>
            }
                <thead>
                    <tr>
                        <th> Earth Date </th>
                        <th> Image Src </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.all_data && data.all_data.length > 0 && data.all_data.map(
                            (d) =>
                                <tr key={d.id}>
                                     <td>{d.earth_date}</td>
                                    <td><img src={d.img_src} height="90" width="100"/></td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home