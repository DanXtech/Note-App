import { MdLightMode } from 'react-icons/md'

const Header = ({ handleToggleDarkMode }) => {
    return (
        <>
            <div className='header'>
                <h1>Notes</h1>
                <button
                    onClick={() =>
                        handleToggleDarkMode(
                            (previousDarkMode) => !previousDarkMode
                        )
                    }
                    className=' light'>
                    <MdLightMode />
                </button>
            </div>
        </>
    )
}

export default Header