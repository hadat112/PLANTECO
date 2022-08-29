import { Wallet } from "../../components/wallet";
import { Contract } from "./components/Contract";
import { PButton } from "../../components/PButton";
import {PInput} from "../../components/PInput";
import {PTag} from "../../components/Tag";
import {PTooltip} from "../../components/PTooltip";
import { PToggle } from "../../components/PToggle";
import { QuestionBtn } from "../../components/QuestionBtn";

export default function Dashboard() {
    return (
        <div className="dashboard h-full w-full p-12 overflow-scroll">
            <div className="wallet-list w-full">
                <div className="font-semibold mb-4">Wallets</div>
                <Wallet />
            </div>
            <PButton text="Button" main default />
            <PInput title="Title" error err="error"/>
            <PTag text = "Security" actived />
            <PTooltip text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsa deserunt architect" dark />
            <PToggle></PToggle>
            <QuestionBtn dark></QuestionBtn>
            <div className="contracts mt-32">

                <div className="font-semibold mb-4">My investment contracts</div>

                <Contract number='1' percent='50' invested='1500' expected='2000' durations={{ start: '1', end: '2' }} />
            </div>
        </div>
    );
}