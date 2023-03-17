import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query'

const Dashboard = () => {
    const {user}=useContext(AuthContext);
    const url=`http://localhost:5000/orders?email=${user?.email}`;
    const {data: orders=[]}=useQuery({
        queryKey:['orders',user?.email],
        queryFn: async ()=>{
            const res=await fetch(url);
            const data=await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='mb-5'>comin soon</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Service name</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            orders.map((order,i)=><tr>
                            <th>{i}</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>)
                        }
                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;