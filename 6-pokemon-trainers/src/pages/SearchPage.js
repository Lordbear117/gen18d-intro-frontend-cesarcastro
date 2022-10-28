import SearchFilters from "../components/SearchFilters";
import ListCard from "../components/ListCard";
import Card from "../components/Card";

const trainersArray = [
    {
        name: 'Ash Ketchum',
        region: 'Kanto',
        rank: 2,
        team: [
            { name: 'pikachu', level: 100 },
            { name: 'greninja', level: 50 },
        ],
        history: 'lalalalalalala',
    },
    {
        name: 'Misty',
        region: 'Kanto',
        rank: 2,
        team: [
            { name: 'staryu', level: 30 },
            { name: 'psyduck', level: 40 },
        ],
        history: 'lalalalalalala',
    },

    {
        name: 'Cesar',
        region: 'Kanto',
        rank: 2,
        team: [
            { name: 'staryu', level: 30 },
            { name: 'psyduck', level: 40 },
        ],
        history: 'lalalalalalala',
    }
];


function SearchPage() {
    return (
        <>
            <SearchFilters></SearchFilters>
            <ListCard>
            {trainersArray.map((trainerInArray, index) => <Card key={index} trainerComponent={trainerInArray}/> )}
            
            </ListCard>
            

        </>
    );
}

export default SearchPage;