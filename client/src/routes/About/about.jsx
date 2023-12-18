import React from 'react'

const About = () => {
    return (
        <div>

            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>ACTION</th>
                        <th>URL</th>
                        <th>HTTP</th>
                        <th>BODY</th>
                        <th>RESULT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ color: "blue" }}>READ</td>
                        <td>/api/movies</td>
                        <td>GET</td>
                        <td>Empty</td>
                        <td>Returns All Movies</td>
                    </tr>
                    <tr>
                        <td style={{ color: "blue" }}>READ</td>
                        <td>/api/movies/:id</td>
                        <td>GET</td>
                        <td>Empty</td>
                        <td>Renturns a Single Movie</td>
                    </tr>
                    <tr>
                        <td style={{ color: "green" }}>CREATE</td>
                        <td>/api/movies</td>
                        <td>POST</td>
                        <td>JSON?</td>
                        <td>New Book Created</td>
                    </tr>
                    <tr>
                        <td style={{ color: "orange" }}>UPDATE</td>
                        <td>/api/movies/:id</td>
                        <td>PUT</td>
                        <td>JSON?</td>
                        <td>Updates Movie</td>
                    </tr>
                    <tr>
                        <td style={{ color: "red" }}>DELETE</td>
                        <td>/api/movies/:id</td>
                        <td>DELETE</td>
                        <td>JSON</td>
                        <td>Deletes Movie</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default About
