import React, { useState, useEffect } from 'react';

import ACSAttackResults from '../Components/ACSAttackResults/ACSAttackResults';
import AttacksOverview from '../Components/AttacksOverview/AttacksOverview';
import RecyclerPickups from '../Components/RecyclerPickups/RecyclerPickups';
import TextInput from '../Components/TextInput/TextInput';
import Button from '../Components/Button/Button';

import { useTranslation } from "react-i18next";
import './AttackersPanel.css';

export default function AttackersPanel({ combatReports, setCombatReports, recycleReports, setRecycleReports }) {
    const { t } = useTranslation();
    return (
        <div className="attackers-panel">
            <ACSAttackResults
                combatReports={combatReports}
                setCombatReports={setCombatReports}
            />
            <AttacksOverview
                combatReports={combatReports}
                setCombatReports={setCombatReports}
            />
            <RecyclerPickups
                recycleReports={recycleReports}
                setRecycleReports={setRecycleReports}
            />
        </div>
    )
}