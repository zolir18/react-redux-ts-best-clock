import SearchPanel from './SearchPanel';
import MainClock from './MainClock';
import CityName from "./CityName";
import DateString from "./DateString";

const Clock = () => {

    return (
        <div className="wrap-clock">
            <SearchPanel />
            <div className="clock__show-info">
                <CityName />
                <MainClock />
                <DateString />
                {/*<SavedTimeZones deleteSavedCity={props.deleteSavedCity} savedCity={props.savedCity}*/}
                {/*                searchBySavedCity={props.searchBySavedCity}/>*/}
            </div>
        </div>
    );
};
export default Clock;
