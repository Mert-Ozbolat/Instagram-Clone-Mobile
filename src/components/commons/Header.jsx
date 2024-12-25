import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
    IGLogo,
    ChevronDown,
    Heart,
    Messages,
    AddFeeds,
    ChevronLeft,
    VerifiedBadge,
    Notification,
    Options,
    Drawer,
} from '../../assets/icons';
import Badge from './Badge';
import Dot from './Dot';
import { routes } from '../../constants/routes';
import Title, { titleTypes } from './Title';


const Header = ({ screenName, isMyProfile }) => {
    const { FEED_POSTS_SCREEN } = routes;
    return (
        <View style={styles.header}>
            {screenName === FEED_POSTS_SCREEN ? (
                <View style={styles.leftBox}>
                    <IGLogo />
                    <ChevronDown />
                </View>
            ) : isMyProfile ? (
                <View style={[styles.leftBox, { alignItems: 'center' }]}>
                    <Title text={"My Profile"} theme={titleTypes.TEXT_22_700_40} />
                    <Badge value={12} />
                </View>
            ) : (
                <ChevronLeft />
            )}

            {screenName == routes.PROFILE_SCREEN && isMyProfile === false && (
                <View style={styles.middelBox}>
                    <Title text={'username'} theme={titleTypes.TEXT_16_700} />
                    <VerifiedBadge />
                </View>
            )}

            {
                screenName === FEED_POSTS_SCREEN ? (
                    <View style={styles.rightBox}>
                        <Heart />
                        <Dot />
                        <Messages />
                        <Badge customStyle={styles.badge} value={'15'} />
                        <AddFeeds />
                    </View>
                ) : isMyProfile ? (
                    <View style={styles.rightBox}>
                        <AddFeeds />
                        <Drawer />
                    </View>
                ) : (
                    <View style={styles.rightBox}>
                        <Notification />
                        <Options />
                    </View>
                )
            }

        </View >
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 13,
        paddingVertical: 5,
    },
    leftBox: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
    },
    middelBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    rightBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 24,
    },
    badge: { position: 'absolute', left: 64, top: -3, zIndex: 1000 },
});