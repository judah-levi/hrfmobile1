// import React, { useEffect } from 'react';
// import firestore from '@react-native-firebase/firestore'

// export default function MyCarousel() {
//     const [newsList, setNewsList] = React.useState([])
 
//     useEffect(() => {
//         firestore().collection('news-updates').get()
//         .then(snapshot => {
//            setNewsList(snapshot.docs.map(doc => doc.data()))
//            return newsList
//         })
//         .catch(err => {
//             console.log('Error getting documents', err);
//         });
//     }, []);

//         return (
//             <View style={styles.carousel}>
//                 {newsList.map(item => 
//                     <View style={styles.cardWrapper}>
//                         <Text style={styles.cardTitle} key={item.title}>{item.title} </Text>
//                         <Text style={styles.cardContent} key={item.content}>{item.content} </Text>
//                     </View>
//                 )}
//             </View>
//         );
        
//     }
    
//     const styles = StyleSheet.create({
//         carousel: {
//             flex: 1,
//             flexDirection: 'row'
//         },
//         cardWrapper: {
//             backgroundColor: 'white',
//             margin: 25,
//             marginTop: '22%',
//             padding: 11,
//             borderRadius: 6,
//             borderStyle: 'dotted',
//             borderColor: 'blue',
//             borderWidth: 2,
//             height: 550,
//         },
//         cardTitle: {
//             color: 'black',
//             fontWeight: 'bold',
//             fontSize: 33,
//             paddingBottom: 5,
//         },
//         cardContent: {
//             color: 'black',
//             fontSize: 22,
//             paddingBottom: 7,
//             lineHeight: 28,
//         },
        
//     })
    
//     {/* <Image source={{uri: 'https://picsum.photos/700'}}></Image> */}

    

