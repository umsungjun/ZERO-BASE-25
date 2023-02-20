import React, { useState, useRef } from "react";


export default function UnControlled(): React.ReactElement {
    const fileInputRef = useRef(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(fileInputRef)
        alert(`selectedFile: ${fileInputRef.current.files[0].name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                upload file:
                <input type="file" ref={fileInputRef} />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
}