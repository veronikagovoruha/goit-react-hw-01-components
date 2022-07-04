import Section from "components/Section/Section"

import Profile from "./components/Profile/Profile"
import userData from "./data/user.json"

import Statistics from './components/Statistics/Statistics'
import statisticData from "./data/data.json"

import FriendList from './components/FriendList/FriendList'
import friendsData from "./data/friends.json"

import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactions from "./data/transactions.json"


// import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
// import transactions from './data/transactions.json';

export default function App(){
    return(
        <div className='container'>
            <Section title="Profile" subtitle="Task №1">
                <Profile
                username={userData.username}
                tag={userData.tag}
                location={userData.location}
                avatar={userData.avatar}
                stats={userData.stats}
            />
            </Section>
            

            <Section title="Statistics" subtitle="Task №2" >
                <Statistics stats={statisticData} />
            </Section>

            <Section title="Friends List" subtitle="Task №3"  >
                <FriendList friends={friendsData} />
            </Section>

            <Section title="Transaction History" subtitle="Task №4" >
                <TransactionHistory items={transactions} />
            </Section>
            
        </div>
    )
}