class LegendItem {
    constructor(title, color, isFor, textColor) {
        this.title = title;
        this.color = color;
        this.isFor = isFor;
        this.textColor = textColor != null ? textColor : '#585858';
    }
}

export default LegendItem;
