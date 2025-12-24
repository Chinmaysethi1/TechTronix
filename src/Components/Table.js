import React from 'react'
import { Box } from '@mui/material'

function Table() {
  return (
    <Box sx={{display:"flex",flexWrap:"wrap",padding:"0 4rem",columnGap:'4rem',rowGap:"4rem",justifyContent:"center"}}>
    <table>
        <tr>
            <th rowSpan={10} className='verticalTableHeader'>day 1 : 09.01.26</th>
            <th>Time</th>
            <th>event</th>
        </tr>
        <tr>
            <td>03:00pm - 03:05 pm</td>
            <td>inauguration</td>
        </tr>
        <tr>
            <td>3:05pm - 3:10pm</td>
            <td>Welcome address by HoP, ETC Engg/Convenor</td>
        </tr>
        <tr>
            <td>3:10pm – 3:15pm</td>
            <td>Address by Head, SES</td>
        </tr>
        <tr>
            <td>3:15pm – 3:20pm</td>
            <td>Address by Chief Guest Prof. Dharanidhar Dang</td>
        </tr>
        <tr>
            <td>3:20pm – 3:25pm</td>
            <td>Address by Prof. Dr. Dipak Kumar Sahoo, Hon’bleVice Chancellor VSSUT, Burla</td>
        </tr>
        <tr>
            <td>3:25pm – 3:27pm</td>
            <td>Souvenir Launch</td>
        </tr>
        <tr>
            <td>3:27pm – 3:30pm</td>
            <td>Vote of thanks by PIC, ETC Society</td>
        </tr>
        <tr>
            <td>3:00 pm - 4:00 pm</td>
            <td>Mindscape Rumble(technical Quiz)</td>
        </tr>
        <tr>
            <td>3:30pm – 4:30pm</td>
            <td>Technical Talk-I
                Prof. Dharanidhar Dang, 
                Dept. of Electrical and Computer Engineering 
                University of Texas at San Antonio</td>
        </tr>
    </table>
    <table>
    <tr>
    <th rowSpan={11} className='verticalTableHeader'>day 2 : 10.01.26</th>

        <th>Time</th>
        <th>event</th>
    </tr>
    <tr>
        <td>9:00am – 10:15am</td>
        <td>Technical Talk-II
            Prof. Sukanta Kumar Tripathy
            Topic: Sensor Network
</td>
    </tr>
    <tr>
        <td>10:30am – 1:00pm</td>
        <td>Logic Labyrinth (Circuit/Model Presentation)</td>
    </tr>
    <tr>
        <td>10:30am – 1:00pm</td>
        <td>Hacksphere (Hackathon)</td>
    </tr>
    <tr>
        <td>10:30am – 1:00pm</td>
        <td>TechNova (Project Presentation)</td>
    </tr>
    <tr>
        <td>11:00am – 1:00pm</td>
        <td>Mindscape Rumble(School Quiz)</td>
    </tr>
    <tr>
        <td>01:00 pm - 02:00 pm</td>
        <td>lunch break</td>
    </tr>
    <tr>
        <td>2:30pm – 4:00pm</td>
        <td>byte bounty (treasure hunt)</td>
    </tr>
    <tr>
        <td>4:00pm – 4:40pm</td>
        <td>Valedictory Ceremony</td>
    </tr>
    <tr>
        <td>4:40pm – 4:50pm</td>
        <td>Vote of thanks by Secretaries</td>
    </tr>
    <tr>
        <td>4:50pm – 5:00pm</td>
        <td>Group photo session</td>
    </tr>
</table>
</Box>
  )
}

export default Table