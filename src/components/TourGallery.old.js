import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components'
import Lightbox from 'react-images';

const gutter = {
    small: 2,
    large: 4,
};

const GalleryWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-right: ${gutter.small}px;
    margin-top: 50px;
    overflow: hidden;

    @media (min-width: 500px) {
        margin-right: ${gutter.large}px;
        margin-bottom: 50px
    }
`

const PhotoWrap = styled.img`
    border: 0px;
    box-sizing: border-box;
    display: block;
    float: left;
    height: auto;
    line-height: 0px;
    max-width: 100%;
    padding-right: ${gutter.small}px;
    padding-bottom: ${props => props.orientation === 'landscape' ? gutter.small + "px" : "2px"};
    overflow: hidden;
    width:${props => props.orientation === 'landscape' ? "30%" : "40%"};

    @media (min-width: 500px) {
        padding-right: ${gutter.large}px;
        padding-bottom: ${props => props.orientation === 'landscape' ? (gutter.large + "px") : "4px"};
    }
`

class TourGallery extends Component {
    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }
    openLightbox(index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    gotoImage(index) {
        this.setState({
            currentImage: index,
        });
    }
    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }
    renderGallery() {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.filter(i => i.useForDemo).map((obj, i) => {
            return (
                <PhotoWrap
                    href={obj.src}
                    orientation={obj.orientation}
                    key={i}
                    onClick={(e) => this.openLightbox(i, e)}
                    src={obj.thumbnail}
                />
            );
        });

        return (
            <GalleryWrap>
                {gallery}
            </GalleryWrap>
        );
    }
    render() {
        return (
            <div className="section">
                {this.props.heading && <h2>{this.props.heading}</h2>}
                {this.props.subheading && <p>{this.props.subheading}</p>}
                {this.renderGallery()}
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={this.props.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                    preventScroll={this.props.preventScroll}
                    showThumbnails={this.props.showThumbnails}
                    spinner={this.props.spinner}
                    spinnerColor={this.props.spinnerColor}
                    spinnerSize={this.props.spinnerSize}
                    theme={this.props.theme}
                />
            </div>
        );
    }
}

TourGallery.displayName = 'Gallery';
TourGallery.propTypes = {
    heading: PropTypes.string,
    images: PropTypes.array,
    showThumbnails: PropTypes.bool,
    subheading: PropTypes.string,
};

export default TourGallery;