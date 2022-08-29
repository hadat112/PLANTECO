import { BiTrendingUp, BiChevronDown } from 'react-icons/bi'


export function Contract(props: any) {
    return (
        <div className="contract flex flex-col justify-between items-center bg-white rounded-2xl p-8 w-[300px]">
            <div className="contract-number text-base font-semibold">
                Investment contract {props.number}
            </div>
            <div className="contract-durations text-gray-500 text-sm mb-4">
                Durations: {props.durations.start} - {props.durations.end}
            </div>
            <div className="contract-percent text-xl font-bold">{props.percent}%</div>
            <div className="contract-status text-gray-500 text-sm mb-4">In progress</div>
            <div className="contract-invest-expect flex text-base text-xl font-semibold">
                <div className="contract-invest mr-2 ">
                    {props.invested}
                </div>
                <BiTrendingUp className='text-light-green'/>
                <div className="contract-expect text-light-green ml-2">
                    {props.expected}
                </div>
            </div>
            <div className="contract-more mt-8 text-gray-500"> 
                More-detail <BiChevronDown className='inline '/>
            </div>
        </div>
    )
}