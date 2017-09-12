import React from "react"
import { shallow  } from 'enzyme';
import DataBlockCard from "./DataBlockCard"

describe('<DataBlockCard />', function () {
  it("hourly renders everything but sunrise/sunset", function () {
    const props = {
      dataBlockName: "hourly",
      icon: "cloudy",
      summary: "Cloudy with a change of meatballs",
      temperature: 48.71,
      sunriseTime: 1453391560,
      sunsetTime: 1453424361,
      cloudCover: 0.77,
      humidity: 0.74,
      dewPoint: 26.15,
      timezone: "America/Los_Angeles"
    }

    const wrapper = shallow(<DataBlockCard {...props}/>)

    expect(wrapper.getNode()).toEqual(
      <div>
        <img src={ `./icons/${props.icon}.png` }/>
        <p>{ props.summary }</p>
        Stats:
        <ul>
          <li> Temperature: { props.temperature }°F</li>
          { null }
          { null }
          <li> Cloud Cover: { props.cloudCover * 100 }%</li> /* TODO: do we need to html escape */
          <li> Humidity: { props.humidity * 100 }%</li> /* TODO: do we need to html escape */
          <li> Dew Point: { props.dewPoint }°F</li>
        </ul>
      </div>

    )
  })

  it("minutely renders everything but sunrise, susnet, temperature", function () {
    const props = {
      dataBlockName: "minutely",
      icon: "cloudy",
      summary: "Cloudy with a change of meatballs",
      temperature: 48.71,
      sunriseTime: 1453391560,
      sunsetTime: 1453424361,
      cloudCover: 0.77,
      humidity: 0.74,
      dewPoint: 26.15,
      timezone: "America/Los_Angeles"
    }

    const wrapper = shallow(<DataBlockCard {...props}/>)

    expect(wrapper.getNode()).toEqual(
      <div>
        <img src={ `./icons/${props.icon}.png` }/>
        <p>{ props.summary }</p>
        Stats:
        <ul>
          { /* TIL: yes it's necessary or we get
              'Compared values have no visual difference.' */ }
          { null }
          { null }
          { null }
          <li> Cloud Cover: { props.cloudCover * 100 }%</li> /* TODO: do we need to html escape */
          <li> Humidity: { props.humidity * 100 }%</li> /* TODO: do we need to html escape */
          <li> Dew Point: { props.dewPoint }°F</li>
        </ul>
      </div>

    )
  })

  it("daily renders everything", function () {
    const props = {
      dataBlockName: "daily",
      icon: "cloudy",
      summary: "Cloudy with a change of meatballs",
      temperature: 48.71,
      sunriseTime: 1453391560,
      sunsetTime: 1453424361,
      cloudCover: 0.77,
      humidity: 0.74,
      dewPoint: 26.15,
      timezone: "America/Los_Angeles"
    }

    const wrapper = shallow(<DataBlockCard {...props}/>)

    expect(wrapper.getNode()).toEqual(
      <div>
        <img src={ `./icons/${props.icon}.png` }/>
        <p>{ props.summary }</p>
        Stats:
        <ul>
          <li> Temperature: { props.temperature }°F</li>
          <li> Sunrise:{ "7:52am PST" }</li>
          <li> Sunset:{ "4:59pm PST" }</li>
          <li> Cloud Cover: { props.cloudCover * 100 }%</li> /* TODO: do we need to html escape */
          <li> Humidity: { props.humidity * 100 }%</li> /* TODO: do we need to html escape */
          <li> Dew Point: { props.dewPoint }°F</li>
        </ul>
      </div>

    )
  })

});
