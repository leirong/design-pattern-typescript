import { ImageNode, MarkdownVisitor, RenderVisitor, SpanNode } from './index'

const imageNode = new ImageNode('img', 'https://example.com/image.jpg')
const spanNode = new SpanNode('span', 'Hello, world!')

const renderVisitor = new RenderVisitor()
const markdownVisitor = new MarkdownVisitor()

console.log(imageNode.accept(renderVisitor)) // <img src="https://example.com/image.jpg" />
console.log(spanNode.accept(renderVisitor)) // <span>Hello, world!</span>

console.log(imageNode.accept(markdownVisitor)) // ![img](https://example.com/image.jpg)
console.log(spanNode.accept(markdownVisitor)) // Hello, world!
