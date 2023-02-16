import { useParams } from 'react-router-dom'

export default function BlogDetail() {
    const urlPrams = useParams()
    return (
        <>
            <h1>Halaman blog detail</h1>
            <p>Halo ini adalah halaman detail {urlPrams.slug} </p>
        </>
    )
}