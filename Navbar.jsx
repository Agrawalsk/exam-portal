
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';



function Navbar() {
  return (
    <nav className='bg-gray-200 px-4 py-3 flex justify-between '>
        <div className='flex items-center text-xl'>
            </div>

        <div className='flex items-center gap-x-5'>
          
            <div>
            <NotificationsNoneOutlinedIcon className=' text-black w-6 h-6 hover:shadow hover:bg-gray-300'/></div>

            <div className='relative'>
                <button className='text-black group'>
                    <AccountCircleSharpIcon className='w-6 h-6 mt-1 hover:shadow hover:bg-gray-300'/>
                    <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0 '>
                        <ul className='py-2 text-sm text-gray-950 '>
                            <li><a href="#s">Profile</a></li>
                            <li><a href="#s">Settings</a></li>
                            <li><a href="#s">Log Out</a></li>
                        </ul>
                    </div>

                </button>
            </div>

        </div>
    </nav>
  )
}

export default Navbar