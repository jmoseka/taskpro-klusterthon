import calendar from '../../icons/0.75x/calendar.png';
import bell from '../../icons/0.75x/bell.png';
import { fetchCurrentUser } from '../../modules/FetchCurrentUser';
import { useState } from 'react';
import { useEffect } from 'react';

function MessageBoard() {
    const [currentUser, setCurrentUser] = useState('')
    const msg = `Let's help you simplify your business.`

    const today = new Date();
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedDate = formatter.format(today);

    useEffect(() => {

        async function getCurrentUser() {
            await fetchCurrentUser();
            const { first_name } = await fetchCurrentUser();
            if (first_name) {
                setCurrentUser(first_name)
            }
        }
    getCurrentUser();

    }, [currentUser])





    return (
        <div className="card w-full flex text-start flex-col py-3 px-7 transition duration-600 ease-in-out">


            <p className='font-medium text-lg animation-ease'>


                {!currentUser ?
                    <span className='greetings'>Hello</span>

                    : `Hello ${currentUser}!`}</p>

            <div className='flex items-center gap-2 self-end text-sm'>

                <span className='profile-spans px-3 border-r-[1px] '>
                    <span><img src={calendar} alt='calendar icon' /></span>
                    <span className='profile-date text-sm'>{formattedDate}</span>
                </span>

                <span className='profile-spans'>
                    <span><img src={bell} alt='no notification icon' /></span>
                    <span className='text-white rounded-full h-8 w-8 bg-purple flex justify-center items-center'>
                        <p className='mx-auto text-sm'>{!currentUser? 'B' : currentUser[0]}</p>
                    </span>
                </span>
            </div>


            <p className='font-normal text-sm'>{msg}</p>
        </div>
    )
}

export default MessageBoard;