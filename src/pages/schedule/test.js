/**
 * 用户页面
 *
 * @summary
 * @author PDK
 *
 * Created at     : 2019-03-15
 * Last modified  : 2019-03-15
 */
import Taro, { Component } from '@tarojs/taro'
import { Block, View, Image } from '@tarojs/components'
import UserGrid from '@components/UserGrid'
import styles from './index.module.css'

class User extends Component {
  config = {
    navigationBarTitleText: '个人专区',
    navigationBarBackgroundColor: '#fecf03'
  }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <Block>
        <View className={styles.container}>
          <Image className={styles.avatar} src='https://www.pengdaokuan.cn/static/assets/userpdk.jpeg' alt='avatar' />
          <View className={styles.username}>彭道宽</View>
        </View>
      </Block>
    )
  }
}

export default User
