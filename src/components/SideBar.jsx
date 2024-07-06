import { Sidebar } from "flowbite-react";
import { useEffect,useState } from "react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

function SideBar() {
  const location = useLocation();
  const [tab,setTab] = useState('');
  useEffect(()=>{
    const urlParam = new URLSearchParams(location.search).get('tab');
    if(urlParam){
      setTab(urlParam);
    }

  })

  return (
    <Sidebar className='w-full md:w-56' aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="#" img="https://flowbite.com/docs/images/logo.svg" imgAlt="Flowbite logo">
        Flowbite
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>

          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item 
            active = {tab === 'profile'}
            href="#" 
            icon={HiUser}>
              Profile
            </Sidebar.Item>
          </Link>
          
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign Out
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SideBar