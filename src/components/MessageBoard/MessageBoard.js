import calendar from '../../icons/0.75x/calendar.png';
import bell from '../../icons/0.75x/bell.png';

function MessageBoard() {
    const name = 'Hussein';
    const msg = `Let's help you simplify your business.`

    return (
        <div className="card w-full flex text-start flex-col py-2 px-7 ">
                <p className='font-medium text-lg'>Hello, {name}!</p>

                <div className='flex items-center gap-2 self-end text-sm'>

                    <span className='profile-spans px-3 border-r-[1px] '>
                        <span><img src={calendar} alt='calendar icon' /></span>
                        <span className='profile-date'>Nov - 25 - 2023</span>
                    </span>

                    <span className='profile-spans'>
                        <span><img src={bell} alt='no notification icon' /></span>
                        <span className='text-white rounded-full h-8 w-8 bg-yellow flex justify-center items-center'>
                            <p className='mx-auto text-sm'>{name[0]}</p>
                        </span>
                    </span>
                </div>


                <p className='font-normal text-sm'>{msg}</p>
            </div>
    )
}

export default MessageBoard;