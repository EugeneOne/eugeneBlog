exports.index = async (ctx, next) => {
  //   await ctx.render('index', {
  //     title: 'Koa2-starter'
  //   })
  ctx.body = 'about'
}

exports.about = async (ctx, next) => {
  ctx.body = 'about'
}
