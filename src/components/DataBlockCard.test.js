import React from "react"
import { shallow  } from 'enzyme';
import DataBlockCard from "./DataBlockCard"
import {
  Card,
  CardBlock,
  CardHeader,
} from 'react-bootstrap-card';

describe('<DataBlockCard />', function () {
  it("hourly renders everything but sunrise/sunset", function () {
    const props = {
      dataBlockName: "hourly",
      icon: "cloudy",
      temperature: 48.71,
      sunriseTime: 1453391560,
      sunsetTime: 1453424361,
      cloudCover: 0.77,
      humidity: 0.74,
      dewPoint: 26.15,
      timezone: "America/Los_Angeles",
      time: 1505408667517 / 1000 // UNIX time in secs no ms
    }

    const wrapper = shallow(<DataBlockCard {...props}/>)

    expect(wrapper.getNode()).toEqual(
      <Card className="mb-5 d-block mx-auto w-75">
        <CardBlock>
          <CardHeader>
            Thursday 12pm
          </CardHeader>
            <img class="card-img-top" src={ `./icons/${props.icon}.png` } />
            <ul>
              { props.dataBlockName === "minutely" ? null : <li> Temperature: { props.temperature }°F</li> }
              { null }
              { null }
              <li> Cloud Cover: { props.cloudCover * 100 }%</li> /* TODO: do we need to html escape */
              <li> Humidity: { props.humidity * 100 }%</li> /* TODO: do we need to html escape */
              <li> Dew Point: { props.dewPoint }°F</li>
            </ul>
        </CardBlock>
      </Card>
    )
  })

  it("minutely renders everything but sunrise, susnet, temperature", function () {
    const props = {
      dataBlockName: "minutely",
      icon: "cloudy",
      temperature: 48.71,
      sunriseTime: 1453391560,
      sunsetTime: 1453424361,
      cloudCover: 0.77,
      humidity: 0.74,
      dewPoint: 26.15,
      timezone: "America/Los_Angeles",
      time: 1505408667517 / 1000 // UNIX time in secs no ms
    }

    const wrapper = shallow(<DataBlockCard {...props}/>)

    expect(wrapper.getNode()).toEqual(
      <Card className="mb-5 d-block mx-auto w-75">
        <CardBlock>
          <CardHeader>
            12:04pm
          </CardHeader>
            <img class="card-img-top" src={ `./icons/${props.icon}.png` } />
            <ul>
              { null }
              { null }
              { null }
              <li> Cloud Cover: { props.cloudCover * 100 }%</li> /* TODO: do we need to html escape */
              <li> Humidity: { props.humidity * 100 }%</li> /* TODO: do we need to html escape */
              <li> Dew Point: { props.dewPoint }°F</li>
            </ul>
        </CardBlock>
      </Card>
    )
  })

  it("daily renders everything", function () {
    const props = {
      dataBlockName: "daily",
      icon: "cloudy",
      temperature: 48.71,
      sunriseTime: 1453391560,
      sunsetTime: 1453424361,
      cloudCover: 0.77,
      humidity: 0.74,
      dewPoint: 26.15,
      timezone: "America/Los_Angeles",
      time: 1505408667517 / 1000 // UNIX time in secs no ms
    }

    const wrapper = shallow(<DataBlockCard {...props}/>)

    expect(wrapper.getNode()).toEqual(
      <Card className="mb-5 d-block mx-auto w-75">
        <CardBlock>
          <CardHeader>
            Thursday 14th
          </CardHeader>
            <img class="card-img-top" src={ `./icons/${props.icon}.png` } />
            <ul>
              <li> Temperature: { props.temperature }°F</li>
              <li> Sunrise:{ "7:52am PST" }</li>
              <li> Sunset:{ "4:59pm PST" }</li>
              <li> Cloud Cover: { props.cloudCover * 100 }%</li> /* TODO: do we need to html escape */
              <li> Humidity: { props.humidity * 100 }%</li> /* TODO: do we need to html escape */
              <li> Dew Point: { props.dewPoint }°F</li>
            </ul>
        </CardBlock>
      </Card>
    )
  })

});
