
function Profile() {
    return (
        <>
            <h1>Profile Card Challenge</h1>

            <ProfileCard
                name="Alice"
                age={30}
                greeting={
                    <div>
                        <strong>Hi Alice, have a wonderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
                name="Bob"
                age={25}
                greeting={
                    <div>
                        <strong>Hello Bob, keep up the great work!</strong>
                    </div>
                }
            >
                <p>Hobbies: Gaming, Cooking</p>
                <button>Contact</button>
            </ProfileCard>
        </>
    );
}

function ProfileCard(props) {
    return (
        <>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>{props.greeting}</p> 
            <div>{props.children}</div>
        </>
    );
}
export default Profile;
//when profile is called in the main.jsx file then the profile component will be rendered and the profile component will render the profile card component and the profile card component will receive the props from the profile component and the profile card component will render the name, age, greeting and children props.
//greeting is a jsx element{javascript + HTML} that is passed as a prop to the profile card component