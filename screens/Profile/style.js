import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 16,
    },
    backButton: {
        padding: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
    },
    backButtonText: {
        fontSize: 24,
        color: '#333',
    },
    profileContainer: {
        alignItems: 'center',
        marginVertical: 30,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius:40,
        borderWidth: 2,
        borderColor: '#5A2D96',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#000000',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 15,
    },
    stat: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
         color: '#000000',
    },
    statLabel: {
        fontSize: 12,
        color: '#7E7E7E',
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    activeTab: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#5A2D96',
    },
    inactiveTab: {
        fontSize: 16,
        color: '#A5A5A5',
    },
    photosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    photoPlaceholder: {
        width: '48%',
        height: 120,
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        marginVertical: 8,
    },
});

export default styles;
