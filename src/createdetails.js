export default function createDetails(details) {
    // details.location
    // Town
    // Country
    
    // details.current
    // details.current.condition.text
    // details.current.feelslike_C

    document.getElementById("details").innerHTML = `
        <p>${details.location.name}, ${details.location.country}</p>
        <p>${details.current.condition.text}, ${details.current.feelslike_c}C</p>
    `
}