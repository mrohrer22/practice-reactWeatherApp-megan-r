export default function CityList({selectCity}) {
    return (
    <div>
        <h2>Select a City</h2>

        <button onClick={() => selectCity("NewYork")}>New York</button>
        <button onClick={() => selectCity("London")}>London</button>
        <button onClick={() => selectCity("Tokyo")}>Tokyo</button>
    </div>
    )
}