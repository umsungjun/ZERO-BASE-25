import React from 'react'
import dayjs from 'dayjs'
export default function Day() {
    const momentDate = dayjs()
    const newMomentDate = momentDate.add(1, 'week') // 1주를 더한다
    const cloneNewMomentDate = newMomentDate.clone().add(1, 'week') // 복사한 후 1주를 더한다.

    return (
        <div>
            <h1>Moment</h1>
            <div>Imutable Check</div>
            <br />
            <div>
                {momentDate.format()} {/* 2023-02-23T20:18:44+09:00 */}
            </div>
            <br />
            <div>
                {newMomentDate.format()}
            </div>
            <br />
            <div>
                {cloneNewMomentDate.format()}
            </div>
        </div>
    )
}
