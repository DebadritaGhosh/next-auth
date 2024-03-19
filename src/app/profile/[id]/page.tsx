

export default function UserProfilePage({ params }: any) {
    return (
        <div>
            <h1>Profile</h1>
            <hr></hr>
            <h1>Profile page : {params.id}</h1>
        </div>
    )
}