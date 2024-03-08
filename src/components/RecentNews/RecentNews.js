import React from 'react'
import './RecentNews.css'
import KarateFighter from '../../Assets/imgs/karate-fighters 1.png'
import { ClubData, LeftData } from '../../Assets/Data/recentNewsData'

const RecentNews = () => {
    return (
        <div className='RecentNews'>
            <div className='rec-news-left-side'>
                <h3 className='rec-news-heading'>Recent News</h3>
                <div className='rec-news-left-contents'>
                    <div className='rec-news-left-card' style={{ marginRight: "15px" }}>
                        <div className="rec-news-left-card-overlay"></div>
                        <img src={KarateFighter} alt="" />
                        <div className="rec-news-left-side-card-text">
                            <span>Day 5 Highlights</span>
                            <h3>Baku 2023 World Taekwondo Championships</h3>
                        </div>
                    </div>
                    <div className='rec-news-left-card'>
                        <div>
                            {LeftData.map((item) => {
                                return <div className="rec-news-left-card-item" key={item.id}>
                                    <img src={item.img} alt="" />
                                    <div className='rec-news-left-card-item-text'>
                                        <span>{item.dateplace}</span>
                                        <h4>{item.heading}</h4>
                                    </div>
                                </div>
                            })}
                        </div>
                        <button className='rec-news-left-card-btn'>
                            More
                            <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='rec-news-right-side'>
                <h3 className='rec-news-heading'>Clubs Ranking</h3>
                <div className='table-div'>
                    <table className='rec-news-right-side-table'>
                        <thead>
                            <tr>
                                <th>Club</th>
                                <th>GP</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>F</th>
                                <th>A</th>
                                <th>GD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ClubData.map((item, index) => (
                                <React.Fragment key={index}>
                                    <tr>
                                        <td>
                                            <div className='table-logo-img'>
                                                <span>{item.id + 1}</span>
                                                <img src={item.img} alt="" />
                                                <span>{item.name}</span>
                                            </div>
                                        </td>
                                        <td className='point-info'>{item.GP}</td>
                                        <td className='point-info'>{item.W}</td>
                                        <td className='point-info'>{item.D}</td>
                                        <td className='point-info'>{item.L}</td>
                                        <td className='point-info'>{item.F}</td>
                                        <td className='point-info'>{item.A}</td>
                                        <td className='point-info'>{item.GD}</td>
                                    </tr>
                                    <tr key={`hr-${item.id}`}>
                                        <td colSpan="8">
                                            {index === ClubData.length - 1 ? "" : <hr style={{ border: "0.5px solid #B8C2CE" }} />}
                                        </td>
                                    </tr >
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default RecentNews
