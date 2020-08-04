import React from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const JobBoardComponent = ({
    job: {
        name,
        logo,
        isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
        exp
    },
}) => {
    const langAndTools = [];
    if (tools){
        langAndTools.push(...tools);
    }
    if (languages) {
        langAndTools.push(...languages);
    }

    return(
    <div className='flex bg-white shadow-md m-4 mr-10 ml-10 p-4 rounded'>
        <div>
		{/* <img src={logo} alt={name} /> */}
        </div>
        <div className="flex flex-col justify-between ml-4">
            <h4 className="font-bold text-red-400 mr-auto">{name}</h4>
            <h5 className="font-bold mr-auto">{position}</h5>
            <p className="text-gray-700">
                {postedAt} . {contract} . {location} . {exp}
            </p>
        </div>
        <div className="flex items-center ml-auto">
            {/*langAndTools
                ? langAndTools.map((langAndTools)=> <span className="text-gray-600 bg-gray-300 
                font-bold m-2 p-2 rounded">
                    {langAndTools}</span>)
            : '' */}
        </div>
        <div>
        <ButtonComponent cssClass='e-info' className='mt-auto mb-auto' style={style1}>more info</ButtonComponent>
        </div>
        
    </div>
    );
};

const style1 ={
    textDecorationLine: 'underline'

}

export default JobBoardComponent;