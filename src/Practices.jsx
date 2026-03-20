export const Practices=()=>{
    const students = [1];
    return(
    <>
    <p>{students.length && "No students found"}</p> 
    {/* if left is true then right will be executed and if left is false then right will not be executed. */}
    <p>{students.length === 0 && "No students found"}</p>
    <p>Number of students:{students.length}</p>
    </>
    );
}