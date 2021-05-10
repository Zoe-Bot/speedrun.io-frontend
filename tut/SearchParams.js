import React, {useState, useEffect} from 'react'
import pet, { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown'

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle')
    const [breeds, setBreeds] = useState([])
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS)
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds)

    useEffect(() => {
        setBreeds([])
        setBreed("")

        pet.breeds(animal).then(({breeds}) => {
            const breedsStrings = breeds.map(({name}) => name)
            setBreeds(breedsStrings)
        }, console.error)
    }, [animal, setBreed, setBreeds])

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form>
                <label htmlFor="location"> Location
                    <input id="location" value={location} placeholder="Location" onChange={e => setLocation(e.target.value)} />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams